import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-register');
}

export default function CustomHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-register" />;
}
