import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-discord');
}

export default function NoResetTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-discord" />;
}
