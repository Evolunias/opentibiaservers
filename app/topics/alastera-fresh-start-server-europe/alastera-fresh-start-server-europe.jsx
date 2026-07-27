import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-europe');
}

export default function AlasteraFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-europe" />;
}
