import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-canada');
}

export default function DuraOnlineBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-canada" />;
}
