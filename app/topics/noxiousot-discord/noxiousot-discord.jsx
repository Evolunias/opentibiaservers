import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-discord');
}

export default function NoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-discord" />;
}
