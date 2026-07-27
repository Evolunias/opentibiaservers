import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-server');
}

export default function ThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-server" />;
}
