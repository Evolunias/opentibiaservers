import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-website');
}

export default function OfficialInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-website" />;
}
