import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-download');
}

export default function CurrentInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-download" />;
}
