import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-discord');
}

export default function ActiveSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-discord" />;
}
