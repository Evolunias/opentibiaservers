import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-ot-server');
}

export default function CustomCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-ot-server" />;
}
