import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-ot-server');
}

export default function NewEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-ot-server" />;
}
