import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-server');
}

export default function TibianusServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-server" />;
}
