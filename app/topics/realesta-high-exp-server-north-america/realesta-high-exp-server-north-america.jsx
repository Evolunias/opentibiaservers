import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-north-america');
}

export default function RealestaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-north-america" />;
}
