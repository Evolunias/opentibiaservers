import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-discord');
}

export default function FreshStartNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-discord" />;
}
