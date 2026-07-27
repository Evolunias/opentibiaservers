import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-germany');
}

export default function PvpDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-germany" />;
}
