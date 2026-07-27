import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-server');
}

export default function NewAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-server" />;
}
