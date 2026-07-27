import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-no-reset-server');
}

export default function Canob96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-no-reset-server" />;
}
