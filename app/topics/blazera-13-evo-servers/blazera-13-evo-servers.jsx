import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-evo-servers');
}

export default function Blazera13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-evo-servers" />;
}
