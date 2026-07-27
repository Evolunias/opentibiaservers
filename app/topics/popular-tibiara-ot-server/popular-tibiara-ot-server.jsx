import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-ot-server');
}

export default function PopularTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-ot-server" />;
}
