import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-germany');
}

export default function DuraOnlineBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-germany" />;
}
