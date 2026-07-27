import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-south-america');
}

export default function FreshStartClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-south-america" />;
}
