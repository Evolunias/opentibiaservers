import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-uk');
}

export default function NonPvpDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-uk" />;
}
