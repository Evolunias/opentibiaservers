import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-real-map');
}

export default function OpenTibiaServerListRealMapKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-real-map" />;
}
