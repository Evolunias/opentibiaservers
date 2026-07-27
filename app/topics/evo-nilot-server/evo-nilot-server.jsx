import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-nilot-server');
}

export default function EvoNilotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-nilot-server" />;
}
