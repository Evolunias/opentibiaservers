import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-ots');
}

export default function InfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-ots" />;
}
