import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-register');
}

export default function HarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-register" />;
}
