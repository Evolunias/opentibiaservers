import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-ots');
}

export default function FreshStartInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-ots" />;
}
