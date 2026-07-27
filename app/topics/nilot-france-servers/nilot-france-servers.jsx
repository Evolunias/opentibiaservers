import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-france-servers');
}

export default function NilotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-france-servers" />;
}
