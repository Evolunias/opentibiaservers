import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-evo-servers');
}

export default function Luminera14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-evo-servers" />;
}
