import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-canada');
}

export default function OldSchoolTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-canada" />;
}
