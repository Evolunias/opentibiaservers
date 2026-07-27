import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-france');
}

export default function NilotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-france" />;
}
