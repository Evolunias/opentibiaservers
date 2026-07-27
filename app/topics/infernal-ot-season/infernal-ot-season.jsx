import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-season');
}

export default function InfernalOtSeasonKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-season" />;
}
