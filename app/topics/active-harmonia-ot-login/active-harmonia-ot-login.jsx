import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-login');
}

export default function ActiveHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-login" />;
}
