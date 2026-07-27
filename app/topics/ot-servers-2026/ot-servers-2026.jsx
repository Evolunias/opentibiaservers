import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-2026');
}

export default function OtServers2026KeywordPage() {
  return <StaticKeywordPage slug="ot-servers-2026" />;
}
