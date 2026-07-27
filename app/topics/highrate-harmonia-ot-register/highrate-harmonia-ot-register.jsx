import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-register');
}

export default function HighrateHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-register" />;
}
