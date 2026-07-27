import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-mexico');
}

export default function PvpeServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-mexico" />;
}
