import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-server');
}

export default function CalmeraServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-server" />;
}
