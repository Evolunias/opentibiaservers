import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-ots');
}

export default function CurrentInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-ots" />;
}
