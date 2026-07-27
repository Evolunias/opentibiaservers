import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-server');
}

export default function HighrateHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-server" />;
}
