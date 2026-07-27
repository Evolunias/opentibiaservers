import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-argentina');
}

export default function ThorniaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-argentina" />;
}
