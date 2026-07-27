import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-thaisot-server');
}

export default function LowExpThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-thaisot-server" />;
}
