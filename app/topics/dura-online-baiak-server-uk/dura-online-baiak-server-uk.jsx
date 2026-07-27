import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-uk');
}

export default function DuraOnlineBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-uk" />;
}
