import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-ot-server');
}

export default function LowrateCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-ot-server" />;
}
