import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-mexico');
}

export default function HighExpServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-mexico" />;
}
