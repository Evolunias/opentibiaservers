import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-discord');
}

export default function NoResetXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-discord" />;
}
