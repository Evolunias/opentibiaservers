import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-europe');
}

export default function ImperianicHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-europe" />;
}
