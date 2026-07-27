import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-server');
}

export default function SoleraServerKeywordPage() {
  return <StaticKeywordPage slug="solera-server" />;
}
