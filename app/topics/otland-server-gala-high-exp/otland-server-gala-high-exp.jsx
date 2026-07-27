import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-high-exp');
}

export default function OtlandServerGalaHighExpKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-high-exp" />;
}
