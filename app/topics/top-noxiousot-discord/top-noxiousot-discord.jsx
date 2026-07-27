import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-discord');
}

export default function TopNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-discord" />;
}
