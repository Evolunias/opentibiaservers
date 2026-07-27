import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-community');
}

export default function ObsidiaCommunityKeywordPage() {
  return <StaticKeywordPage slug="obsidia-community" />;
}
