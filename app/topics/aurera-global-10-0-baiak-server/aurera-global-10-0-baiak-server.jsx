import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-baiak-server');
}

export default function AureraGlobal100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-baiak-server" />;
}
