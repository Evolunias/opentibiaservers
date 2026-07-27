import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-download');
}

export default function OfficialTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-download" />;
}
