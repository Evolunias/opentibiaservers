import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-poland-server');
}

export default function ThorniaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-poland-server" />;
}
