import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-client');
}

export default function TopThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-client" />;
}
