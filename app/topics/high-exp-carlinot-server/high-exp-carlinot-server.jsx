import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-carlinot-server');
}

export default function HighExpCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-carlinot-server" />;
}
