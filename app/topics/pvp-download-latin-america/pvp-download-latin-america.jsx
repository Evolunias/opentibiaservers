import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-latin-america');
}

export default function PvpDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-latin-america" />;
}
