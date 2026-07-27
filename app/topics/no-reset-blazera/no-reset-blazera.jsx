import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera');
}

export default function NoResetBlazeraKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera" />;
}
