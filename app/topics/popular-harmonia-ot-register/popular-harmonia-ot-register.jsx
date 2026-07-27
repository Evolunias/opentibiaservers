import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-register');
}

export default function PopularHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-register" />;
}
