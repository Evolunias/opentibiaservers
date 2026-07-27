import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-north-america');
}

export default function ThorniaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-north-america" />;
}
