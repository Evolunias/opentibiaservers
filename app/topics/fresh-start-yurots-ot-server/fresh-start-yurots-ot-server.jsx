import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-ot-server');
}

export default function FreshStartYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-ot-server" />;
}
