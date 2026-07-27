import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-usa');
}

export default function TibianusNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-usa" />;
}
