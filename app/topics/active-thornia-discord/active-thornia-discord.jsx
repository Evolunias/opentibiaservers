import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-discord');
}

export default function ActiveThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-discord" />;
}
