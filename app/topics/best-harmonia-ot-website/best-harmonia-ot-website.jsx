import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-website');
}

export default function BestHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-website" />;
}
