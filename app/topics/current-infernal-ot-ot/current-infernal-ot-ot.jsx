import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-ot');
}

export default function CurrentInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-ot" />;
}
