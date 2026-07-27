import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-europe');
}

export default function OtlandServerGalaEuropeKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-europe" />;
}
