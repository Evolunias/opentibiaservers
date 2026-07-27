import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-no-reset-server');
}

export default function Canob100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-no-reset-server" />;
}
