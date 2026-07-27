import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-germany');
}

export default function OldSchoolTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-germany" />;
}
