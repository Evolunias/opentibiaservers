import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-ot');
}

export default function TopInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-ot" />;
}
