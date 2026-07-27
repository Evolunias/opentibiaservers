import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-nilot-servers');
}

export default function EvoNilotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-nilot-servers" />;
}
