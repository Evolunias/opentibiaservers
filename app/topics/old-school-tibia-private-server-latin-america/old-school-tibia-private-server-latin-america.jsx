import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-latin-america');
}

export default function OldSchoolTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-latin-america" />;
}
