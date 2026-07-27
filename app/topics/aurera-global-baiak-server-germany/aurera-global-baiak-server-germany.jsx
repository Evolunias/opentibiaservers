import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-germany');
}

export default function AureraGlobalBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-germany" />;
}
