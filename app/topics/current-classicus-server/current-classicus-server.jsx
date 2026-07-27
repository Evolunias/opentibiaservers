import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-server');
}

export default function CurrentClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-server" />;
}
