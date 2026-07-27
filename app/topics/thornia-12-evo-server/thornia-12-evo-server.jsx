import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-evo-server');
}

export default function Thornia12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-evo-server" />;
}
