import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-europe');
}

export default function AureraGlobalBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-europe" />;
}
