import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-europe');
}

export default function CanobNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-europe" />;
}
