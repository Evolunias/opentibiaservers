import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-website');
}

export default function PopularHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-website" />;
}
