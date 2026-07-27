import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-france');
}

export default function PvpDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-france" />;
}
