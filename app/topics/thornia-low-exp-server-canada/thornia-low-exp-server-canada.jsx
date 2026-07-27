import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-canada');
}

export default function ThorniaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-canada" />;
}
