import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-europe-servers');
}

export default function ThorniaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-europe-servers" />;
}
