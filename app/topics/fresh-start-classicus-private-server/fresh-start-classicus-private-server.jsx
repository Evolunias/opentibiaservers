import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-private-server');
}

export default function FreshStartClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-private-server" />;
}
