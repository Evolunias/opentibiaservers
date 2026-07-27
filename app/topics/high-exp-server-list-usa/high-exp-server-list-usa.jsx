import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-usa');
}

export default function HighExpServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-usa" />;
}
