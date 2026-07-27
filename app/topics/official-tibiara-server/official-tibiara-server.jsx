import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-server');
}

export default function OfficialTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-server" />;
}
