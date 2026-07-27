import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-website');
}

export default function BestInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-website" />;
}
