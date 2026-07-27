import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-evo-servers');
}

export default function Luminera71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-evo-servers" />;
}
