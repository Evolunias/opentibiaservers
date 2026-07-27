import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot');
}

export default function CurrentInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot" />;
}
