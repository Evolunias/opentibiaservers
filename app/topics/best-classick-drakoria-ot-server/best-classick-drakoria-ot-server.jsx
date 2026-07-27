import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-ot-server');
}

export default function BestClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-ot-server" />;
}
