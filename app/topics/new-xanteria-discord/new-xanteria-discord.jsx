import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-discord');
}

export default function NewXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-discord" />;
}
