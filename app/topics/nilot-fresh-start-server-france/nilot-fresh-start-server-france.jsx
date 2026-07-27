import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-france');
}

export default function NilotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-france" />;
}
