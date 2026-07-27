import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-high-exp');
}

export default function PvpeServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-high-exp" />;
}
