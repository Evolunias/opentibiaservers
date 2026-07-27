import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-login');
}

export default function CustomHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-login" />;
}
