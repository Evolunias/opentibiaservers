import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-evo-server');
}

export default function Blazera71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-evo-server" />;
}
