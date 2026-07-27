import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-private-server');
}

export default function CustomElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-private-server" />;
}
