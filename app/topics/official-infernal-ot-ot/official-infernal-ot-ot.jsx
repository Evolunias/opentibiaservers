import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-ot');
}

export default function OfficialInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-ot" />;
}
