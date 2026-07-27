import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-private-server');
}

export default function CustomEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-private-server" />;
}
