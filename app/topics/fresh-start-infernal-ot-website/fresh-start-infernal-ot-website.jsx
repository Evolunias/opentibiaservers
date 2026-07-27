import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-website');
}

export default function FreshStartInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-website" />;
}
