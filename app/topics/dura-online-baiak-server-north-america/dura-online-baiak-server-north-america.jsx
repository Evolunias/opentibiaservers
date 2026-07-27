import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-north-america');
}

export default function DuraOnlineBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-north-america" />;
}
