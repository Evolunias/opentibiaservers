import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-server');
}

export default function ActiveEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-server" />;
}
