import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-pvp');
}

export default function OpenTibiaServerListPvpKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-pvp" />;
}
