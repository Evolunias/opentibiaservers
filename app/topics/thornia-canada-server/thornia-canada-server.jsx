import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-canada-server');
}

export default function ThorniaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-canada-server" />;
}
