import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-active');
}

export default function OtlandServerGalaActiveKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-active" />;
}
