import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-usa');
}

export default function LowExpServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-usa" />;
}
