import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-germany');
}

export default function OldSchoolTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-germany" />;
}
