import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-mexico-server');
}

export default function TibiantisMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-mexico-server" />;
}
