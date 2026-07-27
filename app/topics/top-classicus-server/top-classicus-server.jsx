import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-server');
}

export default function TopClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-server" />;
}
