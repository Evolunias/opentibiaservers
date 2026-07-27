import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-argentina');
}

export default function NonPvpDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-argentina" />;
}
