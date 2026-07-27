import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-download');
}

export default function OldSchoolTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-download" />;
}
