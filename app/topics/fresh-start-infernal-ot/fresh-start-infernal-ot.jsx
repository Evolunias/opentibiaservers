import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot');
}

export default function FreshStartInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot" />;
}
