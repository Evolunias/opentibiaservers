import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-canada-servers');
}

export default function TibianusCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-canada-servers" />;
}
