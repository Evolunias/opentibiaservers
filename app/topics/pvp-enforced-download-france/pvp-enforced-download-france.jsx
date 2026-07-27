import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-france');
}

export default function PvpEnforcedDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-france" />;
}
