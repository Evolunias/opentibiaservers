import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-ot-server');
}

export default function PopularTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-ot-server" />;
}
