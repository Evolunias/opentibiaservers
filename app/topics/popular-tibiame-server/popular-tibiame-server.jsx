import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-server');
}

export default function PopularTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-server" />;
}
