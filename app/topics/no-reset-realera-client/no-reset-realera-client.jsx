import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-client');
}

export default function NoResetRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-client" />;
}
