import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-europe');
}

export default function ThorniaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-europe" />;
}
