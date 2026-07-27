import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-discord');
}

export default function NewNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-discord" />;
}
