import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-ot-server');
}

export default function ActiveCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-ot-server" />;
}
