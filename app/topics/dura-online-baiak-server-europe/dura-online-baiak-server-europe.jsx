import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-europe');
}

export default function DuraOnlineBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-europe" />;
}
