import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-server');
}

export default function FreshStartThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-server" />;
}
