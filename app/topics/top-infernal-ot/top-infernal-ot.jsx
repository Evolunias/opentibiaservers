import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot');
}

export default function TopInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot" />;
}
