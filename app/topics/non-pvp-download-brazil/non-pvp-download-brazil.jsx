import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-brazil');
}

export default function NonPvpDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-brazil" />;
}
