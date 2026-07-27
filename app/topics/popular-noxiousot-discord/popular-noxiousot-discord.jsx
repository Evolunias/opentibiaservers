import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-discord');
}

export default function PopularNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-discord" />;
}
