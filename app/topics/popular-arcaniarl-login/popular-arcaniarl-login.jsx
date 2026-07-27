import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-login');
}

export default function PopularArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-login" />;
}
