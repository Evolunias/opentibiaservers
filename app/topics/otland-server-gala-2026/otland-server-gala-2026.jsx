import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-2026');
}

export default function OtlandServerGala2026KeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-2026" />;
}
