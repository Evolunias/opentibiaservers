import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-uk');
}

export default function PvpDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-uk" />;
}
