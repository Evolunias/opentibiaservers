import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-old-school-download');
}

export default function Tibia84OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-old-school-download" />;
}
