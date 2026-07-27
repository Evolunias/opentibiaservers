import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-uk');
}

export default function FreshStartServersUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-uk" />;
}
