import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-website');
}

export default function OfficialHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-website" />;
}
