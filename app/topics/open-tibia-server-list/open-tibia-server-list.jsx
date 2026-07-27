import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list');
}

export default function OpenTibiaServerListKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list" />;
}
