import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-germany-server');
}

export default function ThorniaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-germany-server" />;
}
