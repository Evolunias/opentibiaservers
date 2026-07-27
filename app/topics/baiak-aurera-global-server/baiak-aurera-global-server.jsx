import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-aurera-global-server');
}

export default function BaiakAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-aurera-global-server" />;
}
