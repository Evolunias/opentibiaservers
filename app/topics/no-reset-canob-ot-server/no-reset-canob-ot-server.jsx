import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-ot-server');
}

export default function NoResetCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-ot-server" />;
}
