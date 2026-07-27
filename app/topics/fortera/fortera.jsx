import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera');
}

export default function ForteraKeywordPage() {
  return <StaticKeywordPage slug="fortera" />;
}
