import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-france');
}

export default function NonPvpDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-france" />;
}
