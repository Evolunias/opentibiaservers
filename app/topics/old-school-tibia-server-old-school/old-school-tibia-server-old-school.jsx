import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-old-school');
}

export default function OldSchoolTibiaServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-old-school" />;
}
