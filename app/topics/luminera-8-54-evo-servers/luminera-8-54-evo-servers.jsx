import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-evo-servers');
}

export default function Luminera854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-evo-servers" />;
}
