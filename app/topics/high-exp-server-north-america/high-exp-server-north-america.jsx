import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-north-america');
}

export default function HighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-north-america" />;
}
