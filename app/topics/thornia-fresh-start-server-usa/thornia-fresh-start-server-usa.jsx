import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-usa');
}

export default function ThorniaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-usa" />;
}
