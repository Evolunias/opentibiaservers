import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-evo-server');
}

export default function Thornia71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-evo-server" />;
}
