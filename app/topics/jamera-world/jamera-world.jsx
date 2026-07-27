import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-world');
}

export default function JameraWorldKeywordPage() {
  return <StaticKeywordPage slug="jamera-world" />;
}
