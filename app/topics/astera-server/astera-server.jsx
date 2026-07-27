import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-server');
}

export default function AsteraServerKeywordPage() {
  return <StaticKeywordPage slug="astera-server" />;
}
