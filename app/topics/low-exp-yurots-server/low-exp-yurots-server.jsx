import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-yurots-server');
}

export default function LowExpYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-yurots-server" />;
}
