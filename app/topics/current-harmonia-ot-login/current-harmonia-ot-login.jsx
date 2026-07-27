import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-login');
}

export default function CurrentHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-login" />;
}
