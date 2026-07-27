import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-canada');
}

export default function AureraGlobalBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-canada" />;
}
