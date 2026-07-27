import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-no-reset-server');
}

export default function Canob15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-no-reset-server" />;
}
