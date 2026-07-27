import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-evo-servers');
}

export default function Blazera74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-evo-servers" />;
}
