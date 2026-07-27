import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-north-america');
}

export default function OldSchoolOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-north-america" />;
}
