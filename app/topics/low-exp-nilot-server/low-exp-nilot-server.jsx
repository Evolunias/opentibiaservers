import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-nilot-server');
}

export default function LowExpNilotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-nilot-server" />;
}
