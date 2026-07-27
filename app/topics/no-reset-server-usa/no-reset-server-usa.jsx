import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-usa');
}

export default function NoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-usa" />;
}
