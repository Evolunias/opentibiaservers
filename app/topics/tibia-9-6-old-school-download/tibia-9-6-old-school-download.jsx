import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-old-school-download');
}

export default function Tibia96OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-old-school-download" />;
}
