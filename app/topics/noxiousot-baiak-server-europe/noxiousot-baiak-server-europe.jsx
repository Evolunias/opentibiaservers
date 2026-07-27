import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-europe');
}

export default function NoxiousotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-europe" />;
}
