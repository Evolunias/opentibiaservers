import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-discord');
}

export default function ActiveNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-discord" />;
}
