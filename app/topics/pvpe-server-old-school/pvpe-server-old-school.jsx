import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-old-school');
}

export default function PvpeServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-old-school" />;
}
