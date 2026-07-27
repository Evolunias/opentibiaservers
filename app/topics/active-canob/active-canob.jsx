import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob');
}

export default function ActiveCanobKeywordPage() {
  return <StaticKeywordPage slug="active-canob" />;
}
