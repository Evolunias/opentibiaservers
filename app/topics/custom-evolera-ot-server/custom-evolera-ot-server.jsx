import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-ot-server');
}

export default function CustomEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-ot-server" />;
}
