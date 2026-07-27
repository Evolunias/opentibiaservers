import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-server');
}

export default function TopThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-server" />;
}
