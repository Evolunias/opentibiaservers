import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-no-reset-server');
}

export default function Canob86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-no-reset-server" />;
}
