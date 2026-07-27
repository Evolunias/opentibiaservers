import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-canada-servers');
}

export default function ThorniaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-canada-servers" />;
}
