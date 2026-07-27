import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-usa-servers');
}

export default function TibianusUsaServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-usa-servers" />;
}
