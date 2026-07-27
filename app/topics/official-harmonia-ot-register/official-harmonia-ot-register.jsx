import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-register');
}

export default function OfficialHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-register" />;
}
