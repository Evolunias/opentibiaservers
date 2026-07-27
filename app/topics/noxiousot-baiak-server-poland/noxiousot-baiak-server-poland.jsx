import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-poland');
}

export default function NoxiousotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-poland" />;
}
