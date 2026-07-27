import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-client');
}

export default function TopNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-client" />;
}
