import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera');
}

export default function AsteraKeywordPage() {
  return <StaticKeywordPage slug="astera" />;
}
