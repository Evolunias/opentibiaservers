import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-world');
}

export default function ForteraWorldKeywordPage() {
  return <StaticKeywordPage slug="fortera-world" />;
}
