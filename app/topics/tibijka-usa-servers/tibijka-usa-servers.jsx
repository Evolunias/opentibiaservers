import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-usa-servers');
}

export default function TibijkaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-usa-servers" />;
}
