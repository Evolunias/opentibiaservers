import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-mexico-server');
}

export default function ElderaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-mexico-server" />;
}
