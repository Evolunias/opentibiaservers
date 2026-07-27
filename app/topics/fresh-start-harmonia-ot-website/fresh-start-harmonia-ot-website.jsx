import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-website');
}

export default function FreshStartHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-website" />;
}
