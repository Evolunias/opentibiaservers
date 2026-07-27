import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-ot-server');
}

export default function FreshStartEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-ot-server" />;
}
