import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-world');
}

export default function CelestaWorldKeywordPage() {
  return <StaticKeywordPage slug="celesta-world" />;
}
