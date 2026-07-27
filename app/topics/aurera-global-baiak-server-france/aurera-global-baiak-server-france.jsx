import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-france');
}

export default function AureraGlobalBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-france" />;
}
