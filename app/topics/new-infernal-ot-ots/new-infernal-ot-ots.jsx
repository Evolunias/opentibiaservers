import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-ots');
}

export default function NewInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-ots" />;
}
