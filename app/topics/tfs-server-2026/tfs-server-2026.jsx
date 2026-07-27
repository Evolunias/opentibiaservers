import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-2026');
}

export default function TfsServer2026KeywordPage() {
  return <StaticKeywordPage slug="tfs-server-2026" />;
}
