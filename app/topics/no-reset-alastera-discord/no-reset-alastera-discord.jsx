import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-discord');
}

export default function NoResetAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-discord" />;
}
