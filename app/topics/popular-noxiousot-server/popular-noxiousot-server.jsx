import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-server');
}

export default function PopularNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-server" />;
}
