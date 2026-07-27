import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-login');
}

export default function BestHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-login" />;
}
