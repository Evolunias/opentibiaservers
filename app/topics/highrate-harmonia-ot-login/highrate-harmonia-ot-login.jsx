import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-login');
}

export default function HighrateHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-login" />;
}
