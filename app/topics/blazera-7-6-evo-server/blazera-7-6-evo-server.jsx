import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-evo-server');
}

export default function Blazera76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-evo-server" />;
}
