import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-client');
}

export default function FreshStartArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-client" />;
}
