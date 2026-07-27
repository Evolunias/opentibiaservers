import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-server');
}

export default function ActiveCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-server" />;
}
