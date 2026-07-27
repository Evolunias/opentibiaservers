import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-server');
}

export default function TopCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-server" />;
}
