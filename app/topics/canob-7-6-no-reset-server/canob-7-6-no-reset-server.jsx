import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-no-reset-server');
}

export default function Canob76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-no-reset-server" />;
}
