import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-ot-server');
}

export default function FreshStartUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-ot-server" />;
}
