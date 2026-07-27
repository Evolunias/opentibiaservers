import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-2026');
}

export default function TibiaCustomServer2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-2026" />;
}
