import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-ot-server');
}

export default function OfficialOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-ot-server" />;
}
