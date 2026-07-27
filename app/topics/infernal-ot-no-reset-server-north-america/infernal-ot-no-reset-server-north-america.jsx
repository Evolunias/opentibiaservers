import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-no-reset-server-north-america');
}

export default function InfernalOtNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-no-reset-server-north-america" />;
}
