import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-login');
}

export default function OfficialHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-login" />;
}
