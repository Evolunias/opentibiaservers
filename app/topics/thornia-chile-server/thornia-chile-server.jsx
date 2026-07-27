import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-chile-server');
}

export default function ThorniaChileServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-chile-server" />;
}
