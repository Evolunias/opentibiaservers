import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-poland');
}

export default function OxygenotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-poland" />;
}
