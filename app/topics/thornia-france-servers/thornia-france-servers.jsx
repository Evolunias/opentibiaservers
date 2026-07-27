import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-france-servers');
}

export default function ThorniaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-france-servers" />;
}
