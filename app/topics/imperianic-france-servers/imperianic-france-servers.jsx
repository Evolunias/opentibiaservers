import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-france-servers');
}

export default function ImperianicFranceServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-france-servers" />;
}
