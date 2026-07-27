import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-ot-server');
}

export default function OfficialCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-ot-server" />;
}
