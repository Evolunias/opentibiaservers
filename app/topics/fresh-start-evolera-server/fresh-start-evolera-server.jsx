import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-server');
}

export default function FreshStartEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-server" />;
}
