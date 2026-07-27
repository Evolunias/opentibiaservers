import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-uk');
}

export default function AlasteraFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-uk" />;
}
