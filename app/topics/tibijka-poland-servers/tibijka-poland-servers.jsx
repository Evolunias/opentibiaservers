import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-poland-servers');
}

export default function TibijkaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-poland-servers" />;
}
