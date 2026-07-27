import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-ots');
}

export default function TopInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-ots" />;
}
