import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl');
}

export default function CustomArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl" />;
}
