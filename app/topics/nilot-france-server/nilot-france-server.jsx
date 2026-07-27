import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-france-server');
}

export default function NilotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-france-server" />;
}
