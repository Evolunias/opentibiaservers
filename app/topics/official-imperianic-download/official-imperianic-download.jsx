import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-download');
}

export default function OfficialImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-download" />;
}
