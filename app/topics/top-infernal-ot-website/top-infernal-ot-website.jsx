import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-website');
}

export default function TopInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-website" />;
}
