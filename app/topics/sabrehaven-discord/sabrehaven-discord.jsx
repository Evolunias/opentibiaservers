import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-discord');
}

export default function SabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-discord" />;
}
