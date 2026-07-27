import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-client');
}

export default function TopTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-client" />;
}
