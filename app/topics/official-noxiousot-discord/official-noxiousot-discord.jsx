import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-discord');
}

export default function OfficialNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-discord" />;
}
