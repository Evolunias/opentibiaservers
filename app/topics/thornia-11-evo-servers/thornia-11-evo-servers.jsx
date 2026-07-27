import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-evo-servers');
}

export default function Thornia11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-evo-servers" />;
}
