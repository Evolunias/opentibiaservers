import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-canada');
}

export default function CanobNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-canada" />;
}
