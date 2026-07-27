import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-2026');
}

export default function FunServer2026KeywordPage() {
  return <StaticKeywordPage slug="fun-server-2026" />;
}
