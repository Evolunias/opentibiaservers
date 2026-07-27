import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-discord');
}

export default function CustomSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-discord" />;
}
