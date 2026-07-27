import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-no-reset-server');
}

export default function Canob14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-no-reset-server" />;
}
