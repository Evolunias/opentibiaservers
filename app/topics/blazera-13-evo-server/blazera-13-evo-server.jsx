import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-evo-server');
}

export default function Blazera13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-evo-server" />;
}
