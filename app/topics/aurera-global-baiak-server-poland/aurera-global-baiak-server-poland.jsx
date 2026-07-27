import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-poland');
}

export default function AureraGlobalBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-poland" />;
}
