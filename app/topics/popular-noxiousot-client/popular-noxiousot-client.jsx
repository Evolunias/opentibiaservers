import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-client');
}

export default function PopularNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-client" />;
}
