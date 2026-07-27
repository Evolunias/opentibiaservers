import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-mexico-server');
}

export default function RealeraMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-mexico-server" />;
}
