import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-argentina');
}

export default function OxygenotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-argentina" />;
}
