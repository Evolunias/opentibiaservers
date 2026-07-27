import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-uk');
}

export default function CanobNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-uk" />;
}
