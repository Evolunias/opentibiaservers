import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-france');
}

export default function OldSchoolOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-france" />;
}
