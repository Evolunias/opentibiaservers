import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-sweden');
}

export default function CanobNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-sweden" />;
}
