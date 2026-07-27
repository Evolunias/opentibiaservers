import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-uk');
}

export default function HighExpServerListUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-uk" />;
}
