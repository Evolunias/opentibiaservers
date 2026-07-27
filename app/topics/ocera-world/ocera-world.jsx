import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-world');
}

export default function OceraWorldKeywordPage() {
  return <StaticKeywordPage slug="ocera-world" />;
}
