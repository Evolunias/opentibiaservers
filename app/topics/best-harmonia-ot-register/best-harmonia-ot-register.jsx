import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-register');
}

export default function BestHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-register" />;
}
