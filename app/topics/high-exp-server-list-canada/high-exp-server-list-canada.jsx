import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-canada');
}

export default function HighExpServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-canada" />;
}
