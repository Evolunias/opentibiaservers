import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-evo-servers');
}

export default function Luminera80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-evo-servers" />;
}
