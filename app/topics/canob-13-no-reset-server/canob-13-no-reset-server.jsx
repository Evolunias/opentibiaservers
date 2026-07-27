import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-no-reset-server');
}

export default function Canob13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-no-reset-server" />;
}
