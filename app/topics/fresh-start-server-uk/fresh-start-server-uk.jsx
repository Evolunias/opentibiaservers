import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-uk');
}

export default function FreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-uk" />;
}
