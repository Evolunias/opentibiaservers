import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-discord');
}

export default function CustomTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-discord" />;
}
