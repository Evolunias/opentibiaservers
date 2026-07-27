import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob');
}

export default function CustomCanobKeywordPage() {
  return <StaticKeywordPage slug="custom-canob" />;
}
