import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-screenshots');
}

export default function OldSchoolTibiaServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-screenshots" />;
}
