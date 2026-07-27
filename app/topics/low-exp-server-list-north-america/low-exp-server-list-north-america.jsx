import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-north-america');
}

export default function LowExpServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-north-america" />;
}
