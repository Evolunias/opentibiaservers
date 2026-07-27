import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-download');
}

export default function Tibia14OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-download" />;
}
