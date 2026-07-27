import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-real-map');
}

export default function OldSchoolTibiaServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-real-map" />;
}
