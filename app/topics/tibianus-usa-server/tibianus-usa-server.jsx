import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-usa-server');
}

export default function TibianusUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-usa-server" />;
}
