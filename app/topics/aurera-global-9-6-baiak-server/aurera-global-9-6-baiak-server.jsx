import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-baiak-server');
}

export default function AureraGlobal96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-baiak-server" />;
}
