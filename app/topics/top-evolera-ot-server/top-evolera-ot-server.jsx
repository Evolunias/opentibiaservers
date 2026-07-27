import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-ot-server');
}

export default function TopEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-ot-server" />;
}
