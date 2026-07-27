import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-login');
}

export default function PopularHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-login" />;
}
