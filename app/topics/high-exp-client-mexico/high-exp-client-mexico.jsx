import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-mexico');
}

export default function HighExpClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-mexico" />;
}
