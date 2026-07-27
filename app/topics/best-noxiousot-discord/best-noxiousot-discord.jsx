import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-discord');
}

export default function BestNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-discord" />;
}
