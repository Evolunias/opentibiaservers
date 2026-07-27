import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-sweden');
}

export default function NoResetClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-sweden" />;
}
