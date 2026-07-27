import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-mexico-server');
}

export default function ImperianicMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-mexico-server" />;
}
