import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-official');
}

export default function LowrateInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-official" />;
}
