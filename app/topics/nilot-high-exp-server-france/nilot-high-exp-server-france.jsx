import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-france');
}

export default function NilotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-france" />;
}
