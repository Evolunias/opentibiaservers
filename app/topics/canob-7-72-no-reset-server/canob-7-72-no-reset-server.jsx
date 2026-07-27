import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-72-no-reset-server');
}

export default function Canob772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-72-no-reset-server" />;
}
