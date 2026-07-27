import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-register');
}

export default function ActiveHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-register" />;
}
