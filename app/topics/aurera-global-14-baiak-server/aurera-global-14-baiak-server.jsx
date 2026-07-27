import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-baiak-server');
}

export default function AureraGlobal14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-baiak-server" />;
}
