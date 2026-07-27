import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-south-america');
}

export default function NonPvpDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-south-america" />;
}
