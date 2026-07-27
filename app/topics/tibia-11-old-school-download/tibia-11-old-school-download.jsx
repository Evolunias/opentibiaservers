import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-download');
}

export default function Tibia11OldSchoolDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-download" />;
}
