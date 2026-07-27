import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-mexico');
}

export default function OldSchoolOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-mexico" />;
}
