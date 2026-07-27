import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-usa');
}

export default function PvpDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-usa" />;
}
