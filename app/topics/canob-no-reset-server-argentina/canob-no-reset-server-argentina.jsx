import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-argentina');
}

export default function CanobNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-argentina" />;
}
