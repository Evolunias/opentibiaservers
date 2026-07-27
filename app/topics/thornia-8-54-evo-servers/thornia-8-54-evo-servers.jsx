import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-evo-servers');
}

export default function Thornia854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-evo-servers" />;
}
