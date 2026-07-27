import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-poland');
}

export default function ThorniaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-poland" />;
}
