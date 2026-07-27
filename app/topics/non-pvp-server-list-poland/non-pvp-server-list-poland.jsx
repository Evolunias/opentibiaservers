import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-poland');
}

export default function NonPvpServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-poland" />;
}
