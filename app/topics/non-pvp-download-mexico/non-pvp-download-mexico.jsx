import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-mexico');
}

export default function NonPvpDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-mexico" />;
}
