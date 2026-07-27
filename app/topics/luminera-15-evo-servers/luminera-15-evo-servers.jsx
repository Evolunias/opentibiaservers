import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-evo-servers');
}

export default function Luminera15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-evo-servers" />;
}
