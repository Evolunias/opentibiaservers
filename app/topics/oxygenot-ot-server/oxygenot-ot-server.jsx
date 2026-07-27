import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-ot-server');
}

export default function OxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-ot-server" />;
}
