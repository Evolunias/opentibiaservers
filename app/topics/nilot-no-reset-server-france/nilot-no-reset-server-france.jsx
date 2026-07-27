import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-france');
}

export default function NilotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-france" />;
}
