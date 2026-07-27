import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-evo-servers');
}

export default function Thornia15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-evo-servers" />;
}
