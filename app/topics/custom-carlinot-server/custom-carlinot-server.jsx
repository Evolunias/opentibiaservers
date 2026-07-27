import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-server');
}

export default function CustomCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-server" />;
}
