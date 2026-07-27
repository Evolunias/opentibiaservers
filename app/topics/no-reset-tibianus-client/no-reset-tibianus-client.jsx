import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-client');
}

export default function NoResetTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-client" />;
}
