import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-yurots-server');
}

export default function HighExpYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-yurots-server" />;
}
