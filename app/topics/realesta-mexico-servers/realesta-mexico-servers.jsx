import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-mexico-servers');
}

export default function RealestaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-mexico-servers" />;
}
