import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera');
}

export default function ActiveRealeraKeywordPage() {
  return <StaticKeywordPage slug="active-realera" />;
}
