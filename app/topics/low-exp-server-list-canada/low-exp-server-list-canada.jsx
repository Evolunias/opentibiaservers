import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-canada');
}

export default function LowExpServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-canada" />;
}
