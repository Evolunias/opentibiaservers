import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-evo-server');
}

export default function Blazera81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-evo-server" />;
}
