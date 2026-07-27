import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame');
}

export default function LowrateTibiameKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame" />;
}
