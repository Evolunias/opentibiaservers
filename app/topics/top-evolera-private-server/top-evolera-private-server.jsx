import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-private-server');
}

export default function TopEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-private-server" />;
}
