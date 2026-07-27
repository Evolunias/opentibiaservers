import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-season');
}

export default function OpenTibiaServerListSeasonKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-season" />;
}
