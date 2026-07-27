import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-baiak-server');
}

export default function AureraGlobal86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-baiak-server" />;
}
