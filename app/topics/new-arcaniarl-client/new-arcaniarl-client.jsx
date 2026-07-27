import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-client');
}

export default function NewArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-client" />;
}
