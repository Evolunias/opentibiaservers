import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-mexico');
}

export default function LowExpServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-mexico" />;
}
