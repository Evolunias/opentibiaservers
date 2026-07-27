import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-mexico');
}

export default function ThorniaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-mexico" />;
}
