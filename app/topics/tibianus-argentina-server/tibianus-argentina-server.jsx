import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-argentina-server');
}

export default function TibianusArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-argentina-server" />;
}
