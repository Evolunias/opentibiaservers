import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-download');
}

export default function HighrateInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-download" />;
}
