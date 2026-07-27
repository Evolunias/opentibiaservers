import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-poland');
}

export default function PvpServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-poland" />;
}
