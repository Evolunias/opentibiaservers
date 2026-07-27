import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-europe');
}

export default function NonPvpServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-europe" />;
}
