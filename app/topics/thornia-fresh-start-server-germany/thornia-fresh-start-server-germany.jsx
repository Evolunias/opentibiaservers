import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-germany');
}

export default function ThorniaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-germany" />;
}
