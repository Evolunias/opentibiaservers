import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-server');
}

export default function PopularThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-server" />;
}
