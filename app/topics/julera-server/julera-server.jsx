import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-server');
}

export default function JuleraServerKeywordPage() {
  return <StaticKeywordPage slug="julera-server" />;
}
