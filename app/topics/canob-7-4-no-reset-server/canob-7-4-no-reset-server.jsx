import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-no-reset-server');
}

export default function Canob74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-no-reset-server" />;
}
