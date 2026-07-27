import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-france-server');
}

export default function ThorniaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-france-server" />;
}
