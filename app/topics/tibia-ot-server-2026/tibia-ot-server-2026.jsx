import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-2026');
}

export default function TibiaOtServer2026KeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-2026" />;
}
