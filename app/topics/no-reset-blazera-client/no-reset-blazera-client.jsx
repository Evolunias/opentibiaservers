import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-client');
}

export default function NoResetBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-client" />;
}
