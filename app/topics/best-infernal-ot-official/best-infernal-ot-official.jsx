import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-official');
}

export default function BestInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-official" />;
}
