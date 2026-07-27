import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-brazil');
}

export default function AureraGlobalBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-brazil" />;
}
