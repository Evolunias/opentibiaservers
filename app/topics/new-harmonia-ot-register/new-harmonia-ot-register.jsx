import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-register');
}

export default function NewHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-register" />;
}
