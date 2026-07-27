import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-evo-servers');
}

export default function Blazera84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-evo-servers" />;
}
