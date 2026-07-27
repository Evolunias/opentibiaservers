import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-ot-server');
}

export default function OfficialTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-ot-server" />;
}
