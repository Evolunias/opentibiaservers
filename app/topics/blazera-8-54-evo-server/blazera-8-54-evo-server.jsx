import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-54-evo-server');
}

export default function Blazera854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-54-evo-server" />;
}
