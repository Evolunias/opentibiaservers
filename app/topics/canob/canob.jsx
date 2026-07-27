import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob');
}

export default function CanobKeywordPage() {
  return <StaticKeywordPage slug="canob" />;
}
