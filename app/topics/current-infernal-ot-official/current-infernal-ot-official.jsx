import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-official');
}

export default function CurrentInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-official" />;
}
