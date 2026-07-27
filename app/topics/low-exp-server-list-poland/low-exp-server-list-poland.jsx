import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-poland');
}

export default function LowExpServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-poland" />;
}
