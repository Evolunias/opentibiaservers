import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-download');
}

export default function OfficialKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-download" />;
}
