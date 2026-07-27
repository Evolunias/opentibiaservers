import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-private-server');
}

export default function BestEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-private-server" />;
}
