import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-usa');
}

export default function NoResetServersUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-usa" />;
}
