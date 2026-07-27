import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-europe-servers');
}

export default function TibianusEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-europe-servers" />;
}
