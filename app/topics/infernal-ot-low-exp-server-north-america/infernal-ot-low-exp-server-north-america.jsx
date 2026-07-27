import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-north-america');
}

export default function InfernalOtLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-north-america" />;
}
