import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-brazil');
}

export default function UnlineBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-brazil" />;
}
