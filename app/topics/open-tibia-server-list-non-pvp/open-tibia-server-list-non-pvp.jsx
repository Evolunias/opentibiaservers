import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-non-pvp');
}

export default function OpenTibiaServerListNonPvpKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-non-pvp" />;
}
