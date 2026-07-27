import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-2026');
}

export default function PvpeServer2026KeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-2026" />;
}
