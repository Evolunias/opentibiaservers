import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-website');
}

export default function HarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-website" />;
}
