import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-evo-server');
}

export default function Unline11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-evo-server" />;
}
