import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-official');
}

export default function OfficialInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-official" />;
}
