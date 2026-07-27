import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-ot-server');
}

export default function ActiveEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-ot-server" />;
}
