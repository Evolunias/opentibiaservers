import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-active');
}

export default function OldSchoolTibiaServerActiveKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-active" />;
}
