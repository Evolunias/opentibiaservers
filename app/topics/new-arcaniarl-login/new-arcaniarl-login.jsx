import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-login');
}

export default function NewArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-login" />;
}
