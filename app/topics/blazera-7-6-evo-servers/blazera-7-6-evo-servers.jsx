import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-evo-servers');
}

export default function Blazera76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-evo-servers" />;
}
