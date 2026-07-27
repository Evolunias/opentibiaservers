import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-usa');
}

export default function NoResetClientUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-usa" />;
}
