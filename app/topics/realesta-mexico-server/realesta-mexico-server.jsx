import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-mexico-server');
}

export default function RealestaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-mexico-server" />;
}
