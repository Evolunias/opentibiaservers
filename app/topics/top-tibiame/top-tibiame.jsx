import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame');
}

export default function TopTibiameKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame" />;
}
