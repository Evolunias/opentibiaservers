import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-server');
}

export default function UniteraServerKeywordPage() {
  return <StaticKeywordPage slug="unitera-server" />;
}
