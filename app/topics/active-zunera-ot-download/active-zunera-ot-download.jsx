import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-download');
}

export default function ActiveZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-download" />;
}
