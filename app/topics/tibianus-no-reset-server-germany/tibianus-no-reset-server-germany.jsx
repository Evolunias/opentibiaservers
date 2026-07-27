import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-germany');
}

export default function TibianusNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-germany" />;
}
