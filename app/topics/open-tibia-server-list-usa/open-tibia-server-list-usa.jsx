import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-usa');
}

export default function OpenTibiaServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-usa" />;
}
