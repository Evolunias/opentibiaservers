import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera');
}

export default function HoneraKeywordPage() {
  return <StaticKeywordPage slug="honera" />;
}
