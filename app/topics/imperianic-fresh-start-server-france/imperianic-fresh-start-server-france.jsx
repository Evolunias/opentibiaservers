import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-france');
}

export default function ImperianicFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-france" />;
}
