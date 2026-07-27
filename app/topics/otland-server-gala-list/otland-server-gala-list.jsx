import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-list');
}

export default function OtlandServerGalaListKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-list" />;
}
