import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-community');
}

export default function CelestaCommunityKeywordPage() {
  return <StaticKeywordPage slug="celesta-community" />;
}
