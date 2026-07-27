import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-argentina');
}

export default function AureraGlobalBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-argentina" />;
}
