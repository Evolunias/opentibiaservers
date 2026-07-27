import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-canada');
}

export default function ThorniaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-canada" />;
}
