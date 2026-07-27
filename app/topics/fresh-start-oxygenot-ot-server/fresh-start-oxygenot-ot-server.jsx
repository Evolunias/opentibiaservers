import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-ot-server');
}

export default function FreshStartOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-ot-server" />;
}
