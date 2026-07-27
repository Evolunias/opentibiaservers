import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-ot-server');
}

export default function NewYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-ot-server" />;
}
