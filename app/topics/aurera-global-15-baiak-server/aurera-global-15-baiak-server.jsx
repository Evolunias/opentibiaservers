import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-baiak-server');
}

export default function AureraGlobal15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-baiak-server" />;
}
