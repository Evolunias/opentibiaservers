import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-community');
}

export default function NepteraCommunityKeywordPage() {
  return <StaticKeywordPage slug="neptera-community" />;
}
