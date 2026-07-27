import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-ots');
}

export default function CustomInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-ots" />;
}
