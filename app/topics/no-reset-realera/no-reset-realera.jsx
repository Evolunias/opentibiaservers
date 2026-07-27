import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera');
}

export default function NoResetRealeraKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera" />;
}
