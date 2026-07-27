import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-carlinot-server');
}

export default function LowExpCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-carlinot-server" />;
}
