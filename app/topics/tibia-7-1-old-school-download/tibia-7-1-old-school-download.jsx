import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-old-school-download');
}

export default function Tibia71OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-old-school-download" />;
}
