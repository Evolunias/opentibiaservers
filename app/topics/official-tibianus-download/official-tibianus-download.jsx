import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-download');
}

export default function OfficialTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-download" />;
}
