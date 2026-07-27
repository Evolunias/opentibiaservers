import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-nilot-server');
}

export default function HighExpNilotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-nilot-server" />;
}
