import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-evo-servers');
}

export default function Thornia772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-evo-servers" />;
}
