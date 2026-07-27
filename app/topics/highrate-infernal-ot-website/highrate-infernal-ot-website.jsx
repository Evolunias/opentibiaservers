import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-website');
}

export default function HighrateInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-website" />;
}
