import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-download');
}

export default function Tibia15OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-download" />;
}
