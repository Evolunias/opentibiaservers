import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-north-america');
}

export default function ThorniaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-north-america" />;
}
