import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-download');
}

export default function OfficialZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-download" />;
}
