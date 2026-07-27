import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-evo-server');
}

export default function Blazera84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-evo-server" />;
}
