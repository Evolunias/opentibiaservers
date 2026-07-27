import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-1-baiak-server');
}

export default function AureraGlobal71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-1-baiak-server" />;
}
