import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-poland-servers');
}

export default function ThorniaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-poland-servers" />;
}
