import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-uk');
}

export default function ImperianicHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-uk" />;
}
