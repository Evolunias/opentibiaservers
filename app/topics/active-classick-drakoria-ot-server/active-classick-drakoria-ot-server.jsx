import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-ot-server');
}

export default function ActiveClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-ot-server" />;
}
