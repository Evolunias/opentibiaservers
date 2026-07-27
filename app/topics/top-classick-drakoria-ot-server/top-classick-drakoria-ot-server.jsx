import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-ot-server');
}

export default function TopClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-ot-server" />;
}
