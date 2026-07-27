import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-client');
}

export default function TibianusClientKeywordPage() {
  return <StaticKeywordPage slug="tibianus-client" />;
}
