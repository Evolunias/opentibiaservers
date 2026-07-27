import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-ot-server');
}

export default function HighrateHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-ot-server" />;
}
