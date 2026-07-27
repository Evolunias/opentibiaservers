import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-france-server');
}

export default function ImperianicFranceServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-france-server" />;
}
