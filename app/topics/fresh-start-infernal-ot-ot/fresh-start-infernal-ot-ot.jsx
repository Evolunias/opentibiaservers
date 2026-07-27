import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-ot');
}

export default function FreshStartInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-ot" />;
}
