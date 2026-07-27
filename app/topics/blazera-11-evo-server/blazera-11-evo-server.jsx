import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-evo-server');
}

export default function Blazera11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-evo-server" />;
}
