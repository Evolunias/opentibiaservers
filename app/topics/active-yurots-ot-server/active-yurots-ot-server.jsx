import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-ot-server');
}

export default function ActiveYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-ot-server" />;
}
