import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-2026');
}

export default function Tibia1098Server2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-2026" />;
}
