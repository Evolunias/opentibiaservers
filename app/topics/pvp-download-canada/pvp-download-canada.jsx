import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-canada');
}

export default function PvpDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-canada" />;
}
