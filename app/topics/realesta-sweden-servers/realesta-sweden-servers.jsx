import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-sweden-servers');
}

export default function RealestaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-sweden-servers" />;
}
