import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-france');
}

export default function ImperianicLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-france" />;
}
