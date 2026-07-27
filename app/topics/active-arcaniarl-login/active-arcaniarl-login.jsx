import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-login');
}

export default function ActiveArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-login" />;
}
