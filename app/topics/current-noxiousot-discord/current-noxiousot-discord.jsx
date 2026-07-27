import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-discord');
}

export default function CurrentNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-discord" />;
}
