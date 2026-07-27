import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-client');
}

export default function ArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-client" />;
}
