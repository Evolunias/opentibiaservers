import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-private-server');
}

export default function FreshStartMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-private-server" />;
}
