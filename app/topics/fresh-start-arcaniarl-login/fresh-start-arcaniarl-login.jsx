import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-login');
}

export default function FreshStartArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-login" />;
}
