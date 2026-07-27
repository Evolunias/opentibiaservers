import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-server');
}

export default function FreshStartUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-server" />;
}
