import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob');
}

export default function TopCanobKeywordPage() {
  return <StaticKeywordPage slug="top-canob" />;
}
