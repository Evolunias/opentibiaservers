import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-ots');
}

export default function OfficialInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-ots" />;
}
