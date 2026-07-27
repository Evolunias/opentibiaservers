import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-evo-servers');
}

export default function Blazera772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-evo-servers" />;
}
