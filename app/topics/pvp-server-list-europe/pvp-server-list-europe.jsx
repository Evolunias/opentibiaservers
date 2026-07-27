import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-europe');
}

export default function PvpServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-europe" />;
}
