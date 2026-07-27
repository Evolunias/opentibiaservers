import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-poland');
}

export default function NonPvpDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-poland" />;
}
