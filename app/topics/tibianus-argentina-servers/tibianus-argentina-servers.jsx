import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-argentina-servers');
}

export default function TibianusArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-argentina-servers" />;
}
