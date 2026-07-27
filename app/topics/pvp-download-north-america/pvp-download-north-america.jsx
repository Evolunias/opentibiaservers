import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-north-america');
}

export default function PvpDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-north-america" />;
}
