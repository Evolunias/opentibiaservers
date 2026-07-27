import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-official');
}

export default function OfficialTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-official" />;
}
