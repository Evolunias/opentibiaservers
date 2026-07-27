import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-baiak-server');
}

export default function AureraGlobal12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-baiak-server" />;
}
