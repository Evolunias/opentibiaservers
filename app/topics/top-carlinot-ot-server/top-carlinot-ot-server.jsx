import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-ot-server');
}

export default function TopCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-ot-server" />;
}
