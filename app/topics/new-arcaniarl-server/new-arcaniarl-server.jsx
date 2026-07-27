import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-server');
}

export default function NewArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-server" />;
}
