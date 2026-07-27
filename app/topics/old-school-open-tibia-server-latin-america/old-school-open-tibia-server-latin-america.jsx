import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-latin-america');
}

export default function OldSchoolOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-latin-america" />;
}
