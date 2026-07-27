import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-ot-server');
}

export default function CustomYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-ot-server" />;
}
