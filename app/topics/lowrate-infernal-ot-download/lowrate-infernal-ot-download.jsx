import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-download');
}

export default function LowrateInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-download" />;
}
