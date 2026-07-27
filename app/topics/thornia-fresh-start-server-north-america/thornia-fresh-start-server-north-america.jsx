import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-north-america');
}

export default function ThorniaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-north-america" />;
}
