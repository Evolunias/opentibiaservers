import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-download');
}

export default function Tibia81OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-download" />;
}
