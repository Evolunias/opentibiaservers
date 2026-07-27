import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-download');
}

export default function Tibia12OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-download" />;
}
