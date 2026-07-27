import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-evo-server');
}

export default function Blazera86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-evo-server" />;
}
