import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-evo-servers');
}

export default function Blazera1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-evo-servers" />;
}
