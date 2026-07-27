import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-germany');
}

export default function FreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-germany" />;
}
