import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-mexico-servers');
}

export default function ImperianicMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-mexico-servers" />;
}
