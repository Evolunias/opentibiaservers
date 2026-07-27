import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-usa');
}

export default function ImperianicHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-usa" />;
}
