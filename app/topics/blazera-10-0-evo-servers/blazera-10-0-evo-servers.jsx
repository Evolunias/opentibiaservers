import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-evo-servers');
}

export default function Blazera100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-evo-servers" />;
}
