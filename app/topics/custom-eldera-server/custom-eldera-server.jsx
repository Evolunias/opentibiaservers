import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-server');
}

export default function CustomElderaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-server" />;
}
