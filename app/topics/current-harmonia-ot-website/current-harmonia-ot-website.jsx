import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-website');
}

export default function CurrentHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-website" />;
}
