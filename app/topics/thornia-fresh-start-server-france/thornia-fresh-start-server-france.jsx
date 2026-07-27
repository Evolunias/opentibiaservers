import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-france');
}

export default function ThorniaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-france" />;
}
