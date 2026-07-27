import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-chile-servers');
}

export default function ThorniaChileServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-chile-servers" />;
}
