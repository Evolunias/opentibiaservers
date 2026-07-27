import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-france');
}

export default function ImperianicHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-france" />;
}
