import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-login');
}

export default function PopularThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-login" />;
}
