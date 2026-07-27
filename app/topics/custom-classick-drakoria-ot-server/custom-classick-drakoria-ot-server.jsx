import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-ot-server');
}

export default function CustomClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-ot-server" />;
}
