import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-website');
}

export default function LowrateInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-website" />;
}
