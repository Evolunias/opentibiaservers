import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-2026');
}

export default function NonPvpOtServer2026KeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-2026" />;
}
