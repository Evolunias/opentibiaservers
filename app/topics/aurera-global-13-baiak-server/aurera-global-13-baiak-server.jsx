import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-baiak-server');
}

export default function AureraGlobal13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-baiak-server" />;
}
