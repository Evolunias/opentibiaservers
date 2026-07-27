import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-client');
}

export default function PopularTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-client" />;
}
