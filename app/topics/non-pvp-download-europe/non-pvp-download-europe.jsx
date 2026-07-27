import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-europe');
}

export default function NonPvpDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-europe" />;
}
