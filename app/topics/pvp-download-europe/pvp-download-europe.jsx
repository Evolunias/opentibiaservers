import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-europe');
}

export default function PvpDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-europe" />;
}
