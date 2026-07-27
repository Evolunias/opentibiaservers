import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-mexico');
}

export default function PvpeClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-mexico" />;
}
