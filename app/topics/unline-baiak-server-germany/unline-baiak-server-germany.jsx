import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-germany');
}

export default function UnlineBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-germany" />;
}
