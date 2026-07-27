import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-germany');
}

export default function OxygenotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-germany" />;
}
