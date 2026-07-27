import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-2026');
}

export default function Tibia74Server2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-2026" />;
}
