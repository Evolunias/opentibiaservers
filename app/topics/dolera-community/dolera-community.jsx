import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-community');
}

export default function DoleraCommunityKeywordPage() {
  return <StaticKeywordPage slug="dolera-community" />;
}
