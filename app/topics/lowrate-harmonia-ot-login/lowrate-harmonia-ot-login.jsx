import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-login');
}

export default function LowrateHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-login" />;
}
