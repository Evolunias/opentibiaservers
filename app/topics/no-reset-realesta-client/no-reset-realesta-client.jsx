import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-client');
}

export default function NoResetRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-client" />;
}
