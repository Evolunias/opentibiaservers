import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-world');
}

export default function UniteraWorldKeywordPage() {
  return <StaticKeywordPage slug="unitera-world" />;
}
