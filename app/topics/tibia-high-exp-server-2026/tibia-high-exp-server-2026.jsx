import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-2026');
}

export default function TibiaHighExpServer2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-2026" />;
}
