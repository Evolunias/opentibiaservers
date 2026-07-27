import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-website');
}

export default function ActiveHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-website" />;
}
