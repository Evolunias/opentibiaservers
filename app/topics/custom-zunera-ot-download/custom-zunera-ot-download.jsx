import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-download');
}

export default function CustomZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-download" />;
}
