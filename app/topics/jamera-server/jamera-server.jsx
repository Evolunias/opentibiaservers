import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-server');
}

export default function JameraServerKeywordPage() {
  return <StaticKeywordPage slug="jamera-server" />;
}
