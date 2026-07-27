import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-mexico');
}

export default function DuraOnlineBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-mexico" />;
}
