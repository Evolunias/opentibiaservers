import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-uk-server');
}

export default function ImperianicUkServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-uk-server" />;
}
