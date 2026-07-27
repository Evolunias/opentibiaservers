import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-2026');
}

export default function TibiaPrivateServer2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-2026" />;
}
