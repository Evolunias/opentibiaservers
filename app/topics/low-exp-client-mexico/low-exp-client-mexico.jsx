import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-mexico');
}

export default function LowExpClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-mexico" />;
}
