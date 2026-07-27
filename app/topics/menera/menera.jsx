import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera');
}

export default function MeneraKeywordPage() {
  return <StaticKeywordPage slug="menera" />;
}
