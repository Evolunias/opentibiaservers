import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-mexico');
}

export default function PvpDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-mexico" />;
}
