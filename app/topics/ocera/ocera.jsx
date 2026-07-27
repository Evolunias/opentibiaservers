import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera');
}

export default function OceraKeywordPage() {
  return <StaticKeywordPage slug="ocera" />;
}
