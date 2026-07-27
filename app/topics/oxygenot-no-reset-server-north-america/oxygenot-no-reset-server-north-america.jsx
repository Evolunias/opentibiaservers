import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-north-america');
}

export default function OxygenotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-north-america" />;
}
