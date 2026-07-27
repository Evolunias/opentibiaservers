import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-germany');
}

export default function OtlandServerGalaGermanyKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-germany" />;
}
