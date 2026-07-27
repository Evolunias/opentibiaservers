import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-server');
}

export default function CustomMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-server" />;
}
