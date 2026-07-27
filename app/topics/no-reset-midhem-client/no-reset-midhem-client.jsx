import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-client');
}

export default function NoResetMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-client" />;
}
