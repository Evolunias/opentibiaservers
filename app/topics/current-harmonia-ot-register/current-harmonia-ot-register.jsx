import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-register');
}

export default function CurrentHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-register" />;
}
