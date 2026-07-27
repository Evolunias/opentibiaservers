import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-client');
}

export default function OfficialTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-client" />;
}
