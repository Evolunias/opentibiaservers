import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-germany');
}

export default function FreshStartClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-germany" />;
}
