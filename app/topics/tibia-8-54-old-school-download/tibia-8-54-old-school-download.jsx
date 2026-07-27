import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-download');
}

export default function Tibia854OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-download" />;
}
