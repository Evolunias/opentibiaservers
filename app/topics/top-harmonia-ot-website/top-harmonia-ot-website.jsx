import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-website');
}

export default function TopHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-website" />;
}
