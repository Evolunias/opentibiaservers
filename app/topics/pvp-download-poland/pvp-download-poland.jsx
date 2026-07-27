import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-poland');
}

export default function PvpDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-poland" />;
}
