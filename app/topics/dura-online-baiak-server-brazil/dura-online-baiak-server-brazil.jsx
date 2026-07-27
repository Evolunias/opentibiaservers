import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-brazil');
}

export default function DuraOnlineBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-brazil" />;
}
