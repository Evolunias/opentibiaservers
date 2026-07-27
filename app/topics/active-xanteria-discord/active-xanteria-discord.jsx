import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-discord');
}

export default function ActiveXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-discord" />;
}
