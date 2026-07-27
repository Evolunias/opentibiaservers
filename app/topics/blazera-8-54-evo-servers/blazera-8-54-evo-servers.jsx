import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-54-evo-servers');
}

export default function Blazera854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-54-evo-servers" />;
}
