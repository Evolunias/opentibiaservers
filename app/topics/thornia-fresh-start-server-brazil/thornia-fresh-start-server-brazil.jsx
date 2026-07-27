import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-brazil');
}

export default function ThorniaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-brazil" />;
}
