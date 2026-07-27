import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-private-server');
}

export default function FreshStartEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-private-server" />;
}
