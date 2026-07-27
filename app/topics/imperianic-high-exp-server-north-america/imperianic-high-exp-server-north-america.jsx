import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-north-america');
}

export default function ImperianicHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-north-america" />;
}
