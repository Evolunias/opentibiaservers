import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-evo-server');
}

export default function Blazera15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-evo-server" />;
}
