import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-canada');
}

export default function OldSchoolOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-canada" />;
}
