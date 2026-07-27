import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-mexico');
}

export default function HighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-mexico" />;
}
