import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-evo-server');
}

export default function Blazera74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-evo-server" />;
}
