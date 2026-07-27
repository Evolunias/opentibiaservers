import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-server');
}

export default function CurrentThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-server" />;
}
