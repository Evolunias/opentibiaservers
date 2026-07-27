import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-mexico');
}

export default function AureraGlobalBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-mexico" />;
}
