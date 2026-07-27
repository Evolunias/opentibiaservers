import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-login');
}

export default function OldSchoolTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-login" />;
}
