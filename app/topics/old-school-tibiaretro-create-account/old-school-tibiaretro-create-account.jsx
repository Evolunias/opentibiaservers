import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-create-account');
}

export default function OldSchoolTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-create-account" />;
}
