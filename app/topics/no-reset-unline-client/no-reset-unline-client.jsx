import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-client');
}

export default function NoResetUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-client" />;
}
