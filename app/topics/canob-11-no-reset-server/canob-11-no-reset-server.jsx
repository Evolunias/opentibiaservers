import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-no-reset-server');
}

export default function Canob11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-no-reset-server" />;
}
