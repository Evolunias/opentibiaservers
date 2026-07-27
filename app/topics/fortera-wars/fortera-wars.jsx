import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-wars');
}

export default function ForteraWarsKeywordPage() {
  return <StaticKeywordPage slug="fortera-wars" />;
}
