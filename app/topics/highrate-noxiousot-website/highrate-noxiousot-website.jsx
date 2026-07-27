import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-website');
}

export default function HighrateNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-website" />;
}
