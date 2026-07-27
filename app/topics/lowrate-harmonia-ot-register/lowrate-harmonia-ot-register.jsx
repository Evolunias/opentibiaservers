import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-register');
}

export default function LowrateHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-register" />;
}
