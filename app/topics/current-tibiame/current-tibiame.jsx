import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame');
}

export default function CurrentTibiameKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame" />;
}
