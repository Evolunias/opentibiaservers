import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-uk');
}

export default function NoxiousotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-uk" />;
}
