import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-no-reset-server');
}

export default function Canob81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-no-reset-server" />;
}
