import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot');
}

export default function OfficialInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot" />;
}
