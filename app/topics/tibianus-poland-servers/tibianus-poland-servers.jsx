import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-poland-servers');
}

export default function TibianusPolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-poland-servers" />;
}
