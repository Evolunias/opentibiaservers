import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-uk');
}

export default function ThorniaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-uk" />;
}
