import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-download');
}

export default function Tibia13OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-download" />;
}
