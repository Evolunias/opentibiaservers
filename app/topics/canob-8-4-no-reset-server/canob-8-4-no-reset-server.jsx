import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-no-reset-server');
}

export default function Canob84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-no-reset-server" />;
}
