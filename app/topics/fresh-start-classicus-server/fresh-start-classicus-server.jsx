import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-server');
}

export default function FreshStartClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-server" />;
}
