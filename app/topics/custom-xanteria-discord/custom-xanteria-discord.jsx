import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-discord');
}

export default function CustomXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-discord" />;
}
