import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-official');
}

export default function TopInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-official" />;
}
