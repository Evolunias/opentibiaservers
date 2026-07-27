import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-2026');
}

export default function Tibia13Server2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-2026" />;
}
