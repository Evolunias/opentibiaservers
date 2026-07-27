import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-reset');
}

export default function InfernalOtResetKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-reset" />;
}
