import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-canada');
}

export default function ThorniaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-canada" />;
}
