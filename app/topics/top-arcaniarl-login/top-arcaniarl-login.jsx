import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-login');
}

export default function TopArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-login" />;
}
