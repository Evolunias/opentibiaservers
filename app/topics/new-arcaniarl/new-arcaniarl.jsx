import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl');
}

export default function NewArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl" />;
}
