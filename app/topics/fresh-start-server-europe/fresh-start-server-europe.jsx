import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-europe');
}

export default function FreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-europe" />;
}
