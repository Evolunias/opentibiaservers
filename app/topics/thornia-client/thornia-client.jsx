import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-client');
}

export default function ThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="thornia-client" />;
}
