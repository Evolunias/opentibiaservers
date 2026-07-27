import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-login');
}

export default function CustomArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-login" />;
}
