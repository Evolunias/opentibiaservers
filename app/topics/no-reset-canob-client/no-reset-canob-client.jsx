import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-client');
}

export default function NoResetCanobClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-client" />;
}
