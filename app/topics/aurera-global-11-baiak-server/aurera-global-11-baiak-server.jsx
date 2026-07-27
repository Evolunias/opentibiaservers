import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-baiak-server');
}

export default function AureraGlobal11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-baiak-server" />;
}
