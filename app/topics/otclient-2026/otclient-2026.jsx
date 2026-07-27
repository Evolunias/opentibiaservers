import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-2026');
}

export default function Otclient2026KeywordPage() {
  return <StaticKeywordPage slug="otclient-2026" />;
}
