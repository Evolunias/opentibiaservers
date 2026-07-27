import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-north-america');
}

export default function InfernalOtHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-north-america" />;
}
