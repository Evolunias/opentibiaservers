import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-download');
}

export default function OldSchoolZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-download" />;
}
