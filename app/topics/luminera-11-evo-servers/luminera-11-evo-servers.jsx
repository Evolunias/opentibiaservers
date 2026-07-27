import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-evo-servers');
}

export default function Luminera11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-evo-servers" />;
}
