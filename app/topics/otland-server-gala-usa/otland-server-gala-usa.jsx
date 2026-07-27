import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-usa');
}

export default function OtlandServerGalaUsaKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-usa" />;
}
