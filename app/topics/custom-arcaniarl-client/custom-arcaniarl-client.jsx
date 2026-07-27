import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-client');
}

export default function CustomArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-client" />;
}
