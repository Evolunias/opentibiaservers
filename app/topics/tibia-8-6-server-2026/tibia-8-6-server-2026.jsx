import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-2026');
}

export default function Tibia86Server2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-2026" />;
}
