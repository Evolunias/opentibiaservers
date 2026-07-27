import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-poland');
}

export default function ImperianicHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-poland" />;
}
