import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-poland');
}

export default function DuraOnlineBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-poland" />;
}
