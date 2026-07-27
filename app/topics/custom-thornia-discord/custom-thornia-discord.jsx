import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-discord');
}

export default function CustomThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-discord" />;
}
