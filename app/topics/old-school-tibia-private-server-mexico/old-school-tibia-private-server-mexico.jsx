import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-mexico');
}

export default function OldSchoolTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-mexico" />;
}
