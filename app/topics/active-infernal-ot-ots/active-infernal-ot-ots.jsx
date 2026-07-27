import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-ots');
}

export default function ActiveInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-ots" />;
}
