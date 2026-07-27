import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-wars');
}

export default function OceraWarsKeywordPage() {
  return <StaticKeywordPage slug="ocera-wars" />;
}
