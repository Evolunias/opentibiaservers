import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-client');
}

export default function OpenTibiaServerListClientKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-client" />;
}
