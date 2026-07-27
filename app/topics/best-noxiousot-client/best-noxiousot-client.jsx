import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-client');
}

export default function BestNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-client" />;
}
