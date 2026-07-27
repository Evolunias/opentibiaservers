import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-website');
}

export default function OldSchoolTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-website" />;
}
