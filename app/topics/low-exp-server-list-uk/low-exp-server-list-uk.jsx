import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-uk');
}

export default function LowExpServerListUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-uk" />;
}
