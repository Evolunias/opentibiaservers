import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-private-server');
}

export default function ActiveEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-private-server" />;
}
