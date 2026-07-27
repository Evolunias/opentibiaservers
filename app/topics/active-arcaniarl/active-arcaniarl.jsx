import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl');
}

export default function ActiveArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl" />;
}
