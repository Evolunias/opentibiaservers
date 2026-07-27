import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-community');
}

export default function MorganaCommunityKeywordPage() {
  return <StaticKeywordPage slug="morgana-community" />;
}
