import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-argentina');
}

export default function PvpDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-argentina" />;
}
