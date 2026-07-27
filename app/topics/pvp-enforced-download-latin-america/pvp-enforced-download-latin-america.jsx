import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-latin-america');
}

export default function PvpEnforcedDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-latin-america" />;
}
