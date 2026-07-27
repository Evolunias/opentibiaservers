import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-north-america');
}

export default function NonPvpDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-north-america" />;
}
