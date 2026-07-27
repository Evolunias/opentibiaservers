import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-europe');
}

export default function FreshStartServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-europe" />;
}
