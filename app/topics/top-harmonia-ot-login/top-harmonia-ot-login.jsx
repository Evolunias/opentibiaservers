import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-login');
}

export default function TopHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-login" />;
}
