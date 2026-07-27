import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-france');
}

export default function OldSchoolTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-france" />;
}
