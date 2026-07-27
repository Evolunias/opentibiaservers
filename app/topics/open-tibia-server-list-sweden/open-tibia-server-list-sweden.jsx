import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-sweden');
}

export default function OpenTibiaServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-sweden" />;
}
