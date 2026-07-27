import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-register');
}

export default function TopHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-register" />;
}
