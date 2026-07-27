import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-brazil');
}

export default function NoResetClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-brazil" />;
}
