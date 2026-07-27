import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-evo-servers');
}

export default function Luminera86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-evo-servers" />;
}
