import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-evo-servers');
}

export default function Luminera772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-evo-servers" />;
}
