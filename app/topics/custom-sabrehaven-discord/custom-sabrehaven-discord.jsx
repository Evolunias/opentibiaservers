import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-discord');
}

export default function CustomSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-discord" />;
}
