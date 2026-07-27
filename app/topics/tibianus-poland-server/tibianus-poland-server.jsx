import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-poland-server');
}

export default function TibianusPolandServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-poland-server" />;
}
