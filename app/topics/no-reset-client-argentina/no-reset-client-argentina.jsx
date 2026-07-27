import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-argentina');
}

export default function NoResetClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-argentina" />;
}
