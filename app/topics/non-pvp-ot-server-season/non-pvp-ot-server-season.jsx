import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-season');
}

export default function NonPvpOtServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-season" />;
}
