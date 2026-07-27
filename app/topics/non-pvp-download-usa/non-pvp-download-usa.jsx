import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-usa');
}

export default function NonPvpDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-usa" />;
}
