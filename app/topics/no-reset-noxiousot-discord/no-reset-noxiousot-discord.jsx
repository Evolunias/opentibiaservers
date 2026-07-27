import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-discord');
}

export default function NoResetNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-discord" />;
}
