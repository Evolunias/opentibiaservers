import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl');
}

export default function ArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl" />;
}
