import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-uk-servers');
}

export default function ImperianicUkServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-uk-servers" />;
}
