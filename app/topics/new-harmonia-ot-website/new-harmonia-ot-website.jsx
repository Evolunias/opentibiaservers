import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-website');
}

export default function NewHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-website" />;
}
