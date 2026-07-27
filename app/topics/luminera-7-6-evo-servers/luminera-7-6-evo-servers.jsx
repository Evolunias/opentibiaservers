import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-evo-servers');
}

export default function Luminera76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-evo-servers" />;
}
