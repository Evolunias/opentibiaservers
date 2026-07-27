import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-2026');
}

export default function BaiakServer2026KeywordPage() {
  return <StaticKeywordPage slug="baiak-server-2026" />;
}
