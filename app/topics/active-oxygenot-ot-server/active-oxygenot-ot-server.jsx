import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-ot-server');
}

export default function ActiveOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-ot-server" />;
}
