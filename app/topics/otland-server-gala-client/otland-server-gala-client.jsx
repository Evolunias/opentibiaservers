import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-client');
}

export default function OtlandServerGalaClientKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-client" />;
}
