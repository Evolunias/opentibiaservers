import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-sweden-server');
}

export default function RealestaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-sweden-server" />;
}
