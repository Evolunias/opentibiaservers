import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-europe-server');
}

export default function ThorniaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-europe-server" />;
}
