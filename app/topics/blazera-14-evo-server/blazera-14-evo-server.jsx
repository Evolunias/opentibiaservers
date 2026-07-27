import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-evo-server');
}

export default function Blazera14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-evo-server" />;
}
