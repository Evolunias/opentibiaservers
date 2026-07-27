import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-ot-server');
}

export default function PopularClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-ot-server" />;
}
