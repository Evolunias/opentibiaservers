import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-mexico-servers');
}

export default function RealeraMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="realera-mexico-servers" />;
}
