import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-north-america');
}

export default function HighExpServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-north-america" />;
}
