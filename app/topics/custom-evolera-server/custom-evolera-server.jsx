import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-server');
}

export default function CustomEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-server" />;
}
