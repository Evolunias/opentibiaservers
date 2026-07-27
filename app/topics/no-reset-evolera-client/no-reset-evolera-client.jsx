import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-client');
}

export default function NoResetEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-client" />;
}
