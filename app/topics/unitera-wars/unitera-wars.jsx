import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-wars');
}

export default function UniteraWarsKeywordPage() {
  return <StaticKeywordPage slug="unitera-wars" />;
}
