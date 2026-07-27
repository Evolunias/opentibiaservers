import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-list');
}

export default function OpenTibiaServerListListKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-list" />;
}
