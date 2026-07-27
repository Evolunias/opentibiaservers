import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-website');
}

export default function CustomHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-website" />;
}
