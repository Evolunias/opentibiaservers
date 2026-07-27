import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-discord');
}

export default function NewSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-discord" />;
}
